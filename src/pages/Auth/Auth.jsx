import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { supabase, isSupabaseConfigured, supabaseConfigError } from '../../lib/supabase';

const initialForm = {
    name: '',
    email: '',
    password: '',
    confirmPassword: '',
};

const AuthPage = () => {
    const [isLogin, setIsLogin] = useState(true);
    const [form, setForm] = useState(initialForm);
    const [message, setMessage] = useState('');
    const [error, setError] = useState('');
    const [loading, setLoading] = useState(false);
    const navigate = useNavigate();

    const handleChange = (event) => {
        const { name, value } = event.target;
        setForm((prev) => ({ ...prev, [name]: value }));
    };

    const handleSubmit = async (event) => {
        event.preventDefault();
        setError('');
        setMessage('');

        if (!supabase) {
            setError(supabaseConfigError || 'Configure VITE_SUPABASE_URL e VITE_SUPABASE_ANON_KEY no arquivo .env antes de continuar.');
            return;
        }

        if (!isLogin && form.password !== form.confirmPassword) {
            setError('As senhas precisam ser iguais.');
            return;
        }

        setLoading(true);

        try {
            if (isLogin) {
                const { error: signInError } = await supabase.auth.signInWithPassword({
                    email: form.email.trim(),
                    password: form.password,
                });

                if (signInError) {
                    throw signInError;
                }

                setMessage('Login realizado com sucesso!');
                navigate('/');
            } else {
                const { data, error: signUpError } = await supabase.auth.signUp({
                    email: form.email.trim(),
                    password: form.password,
                    options: {
                        data: {
                            name: form.name.trim(),
                        },
                    },
                });

                if (signUpError) {
                    throw signUpError;
                }

                if (data?.user && !data.session) {
                    setMessage('Cadastro realizado. Verifique o e-mail para confirmar a conta.');
                    setIsLogin(true);
                    setForm(initialForm);
                } else {
                    setMessage('Cadastro realizado com sucesso!');
                    navigate('/');
                }
            }
        } catch (submitError) {
            setError(submitError.message || 'Não foi possível concluir a autenticação.');
        } finally {
            setLoading(false);
        }
    };

    return (
        <section className="container py-5" style={{ maxWidth: 520 }}>
            <div className="card shadow-sm border-0">
                <div className="card-body p-4 p-md-5">
                    <div className="d-flex justify-content-between align-items-center mb-4">
                        <div>
                            <h2 className="mb-1">{isLogin ? 'Entrar' : 'Criar conta'}</h2>
                            <p className="text-muted mb-0">
                                {isLogin ? 'Acesse sua conta para continuar.' : 'Cadastre-se com seu e-mail e senha.'}
                            </p>
                        </div>
                        <button
                            type="button"
                            className="btn btn-link p-0"
                            onClick={() => {
                                setIsLogin((prev) => !prev);
                                setError('');
                                setMessage('');
                            }}
                        >
                            {isLogin ? 'Criar conta' : 'Já tenho conta'}
                        </button>
                    </div>

                    {!isSupabaseConfigured && (
                        <div className="alert alert-warning" role="alert">
                            Falta configurar as variáveis de ambiente do Supabase para o login funcionar.
                        </div>
                    )}

                    <form onSubmit={handleSubmit}>
                        {!isLogin && (
                            <div className="mb-3">
                                <label className="form-label">Nome</label>
                                <input
                                    className="form-control"
                                    name="name"
                                    value={form.name}
                                    onChange={handleChange}
                                    required={!isLogin}
                                />
                            </div>
                        )}

                        <div className="mb-3">
                            <label className="form-label">E-mail</label>
                            <input
                                className="form-control"
                                type="email"
                                name="email"
                                value={form.email}
                                onChange={handleChange}
                                required
                            />
                        </div>

                        <div className="mb-3">
                            <label className="form-label">Senha</label>
                            <input
                                className="form-control"
                                type="password"
                                name="password"
                                value={form.password}
                                onChange={handleChange}
                                required
                            />
                        </div>

                        {!isLogin && (
                            <div className="mb-3">
                                <label className="form-label">Confirmar senha</label>
                                <input
                                    className="form-control"
                                    type="password"
                                    name="confirmPassword"
                                    value={form.confirmPassword}
                                    onChange={handleChange}
                                    required
                                />
                            </div>
                        )}

                        {error && <div className="alert alert-danger">{error}</div>}
                        {message && <div className="alert alert-success">{message}</div>}

                        <button className="btn btn-primary w-100" type="submit" disabled={loading}>
                            {loading ? 'Aguarde...' : isLogin ? 'Entrar' : 'Cadastrar'}
                        </button>
                    </form>

                    <div className="text-center mt-3">
                        <Link to="/" className="text-decoration-none">Voltar para a home</Link>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default AuthPage;
