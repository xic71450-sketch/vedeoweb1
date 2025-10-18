import React, { useState } from "react";

const CODE1 = "Chen85829011";
const CODE2 = "Shen18027068867";
const CODE3 = "520520";

type Props = { onSuccess: () => void };

const AuthGate: React.FC<Props> = ({ onSuccess }) => {
  const [inputs, setInputs] = useState(["", "", ""]);
  const [error, setError] = useState("");

  const handleChange = (i: number, v: string) => {
    const next = [...inputs];
    next[i] = v;
    setInputs(next);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (
      inputs[0] === CODE1 &&
      inputs[1] === CODE2 &&
      inputs[2] === CODE3
    ) {
      localStorage.setItem("vedeo-auth", "ok");
      onSuccess();
    } else {
      setError("验证码错误！");
    }
  };

  return (
    <div style={{ maxWidth: 400, margin: "auto", marginTop: 100 }}>
      <h2>请输入三个验证码</h2>
      <form onSubmit={handleSubmit}>
        <input
          placeholder="验证码1"
          value={inputs[0]}
          onChange={e => handleChange(0, e.target.value)}
          style={{ display: "block", marginBottom: 10, width: "100%" }}
        />
        <input
          placeholder="验证码2"
          value={inputs[1]}
          onChange={e => handleChange(1, e.target.value)}
          style={{ display: "block", marginBottom: 10, width: "100%" }}
        />
        <input
          placeholder="验证码3"
          value={inputs[2]}
          onChange={e => handleChange(2, e.target.value)}
          style={{ display: "block", marginBottom: 10, width: "100%" }}
        />
        {error && <div style={{ color: "red" }}>{error}</div>}
        <button type="submit" style={{ marginTop: 10 }}>进入主页</button>
      </form>
    </div>
  );
};

export default AuthGate;