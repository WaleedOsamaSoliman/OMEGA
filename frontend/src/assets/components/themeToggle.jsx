import React from "react";
import styles from "../statics/css/themeToggle.module.css";
import { Context } from "../context/mainContext";
import { payload } from "../../config/payload";
const defaultOptions = {
  invertedIconLogic: payload.theme === "dark" ? false : true,
};

const ReactThemeToggleButton = ({
  invertedIconLogic = defaultOptions.invertedIconLogic,
}) => {
  const [, dispatch] = React.useContext(Context);
  const [isDark, setIsDark] = React.useState(!defaultOptions.invertedIconLogic);
  return (
    <label
      className={styles.container}
      title={isDark ? "تفعيل الوضع النهاري" : "تفعيل الوضع الليلي"}
      aria-label={isDark ? "تفعيل الوضع النهاري" : "تفعيل الوضع الليلي"}
    >
      <input
        type="checkbox"
        defaultChecked={invertedIconLogic ? !isDark : isDark}
        onChange={() => {
          setIsDark((prev) => !prev);
          dispatch({ type: "change.theme", isDark: isDark });
        }}
      />
      <div />
    </label>
  );
};

export default ReactThemeToggleButton;
