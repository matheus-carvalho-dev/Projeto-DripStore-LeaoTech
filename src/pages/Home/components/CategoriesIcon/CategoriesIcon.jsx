import React, { useState } from "react";
import styles from "./CategoriesIcon.module.scss";
import { Icon } from "../../../../../public/assets/Icons/Icons";

const CategoriesIcon = ({ name, color, onClick, isActive }) => {
	return (
		<li onClick={onClick} className={styles.categoryItem}>
			<div
				style={isActive ? { boxShadow: "0px 4px 25px 0px #0000000D" } : {}}
				className={`${styles.containerIcon}`}
			>
				<Icon isActive={isActive} name={name} color={color} />
			</div>
			<p className={`text-center fw-bold text-dark-gray-2`}>
				{name.toUpperCase()}
			</p>
		</li>
	);
};

export default CategoriesIcon;
