import React, { useEffect } from "react";
import * as l from "./style";
import useInput from "@/hooks/useInput";
import { LOAD_USER_REQUSET, LOGIN_REQUEST } from "@/reducers/user";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "@/reducers";
import { useRouter } from "next/router";
import LoadingFilter from "../../components/layout/LoadingFilter";
import wrapper from "@/store/configureStore";
import axios from "axios";
import { END } from "redux-saga";
import { GetServerSidePropsContext } from "next";

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
  }, [user, router]);

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
                <input
                  type="text"
                  placeholder="아이디를 입력해주세요"
                  value={username}
                  onChange={setUsername}
                />
              </label>
            </div>
            <div>
              <label>
                비밀번호
                <input
                  type="password"
                  placeholder="비밀번호를 입력해주세요"
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

// export async function getServerSideProps(context: any) {
//   const cookie = context.req ? context.req.headers.cookie : '';
//   axios.defaults.headers.Cookie = '';
//   if (context.req && cookie) {
//     axios.defaults.headers.Cookie = cookie;
//   }
  
//   context.store.dispatch({
//     type: LOAD_USER_REQUSET,
//   });
  
//   context.store.dispatch(END);
//   await context.store.sagaTask.toPromise();

//   return {
//     props: { },
//   };
// }

export default Login;
