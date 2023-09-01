import React, { useEffect } from "react";
import * as l from "./style";
import useInput from "@/hooks/useInput";
import { LOGIN_REQUEST } from "@/reducers/user";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "@/reducers";
import { useRouter } from "next/router";
import LoadingFilter from "@/components/layout/LoadingFilter";

const Login = () => {
  const [username, setUsername] = useInput("");
  const [password, setPassword] = useInput("");
  const dispatch = useDispatch();
  const { user } = useSelector((state: RootState) => state.user);
  const loading = useSelector((state: RootState) => state.loading);
  const router = useRouter();

  const onSubmit = React.useCallback(
    (e: any) => {
      e.preventDefault();
      if (username.length < 4 || password.length < 8) return;
      dispatch({
        type: LOGIN_REQUEST,
        payload: { username, password },
      });
    },
    [username, password]
  );

  useEffect(() => {
    if (user) router.push("/");
  }, [user]);

  return (
    <>
      {loading.LOGIN_REQUEST && <LoadingFilter />}
      <l.LoginContainer>
        <>
          <img src="/avatar.svg/" />
          <form onSubmit={onSubmit}>
            <div>
              <label>
                아이디
                <input type="text" value={username} onChange={setUsername} />
              </label>
            </div>
            <div>
              <label>
                비밀번호
                <input
                  type="password"
                  autoComplete="off"
                  value={password}
                  onChange={setPassword}
                />
              </label>
            </div>
            <input type="submit" value="LOGIN" />
          </form>
        </>
      </l.LoginContainer>
    </>
  );
};

export default Login;
