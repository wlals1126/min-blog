import React from "react";
import Link from "next/link";
import * as a from "./style";
import { useSelector } from "react-redux";
import { RootState } from "@/reducers";

const AppHeader = () => {
  const { user } = useSelector((state: RootState) => state.user);
  return (
    <a.HeaderContainer>
      <a.AppHeaderBox>
        <Link href="/" legacyBehavior>
          <a>
            <img src="avatar.svg" alt="blog_icon" />
          </a>
        </Link>
        <a.HeaderButtonBox>
            <Link href="/posting">
              <a.HeaderButton>
                <img src="/pen.svg" alt="error" />
              </a.HeaderButton>
            </Link>
          <Link href="/search" legacyBehavior>
            <a.HeaderButton>
              <img src="search.svg" alt="search_icon" />
            </a.HeaderButton>
          </Link>
          <a.HeaderButton target="_blank" href="https://github.com/wlals1126">
            <img src="/github.svg" alt="github_link_button_img" />
          </a.HeaderButton>
          <a.HeaderButton href="/login" target="_blank">
            <img src="login.svg" alt="fortpolio_link_button" />
          </a.HeaderButton>
        </a.HeaderButtonBox>
      </a.AppHeaderBox>
    </a.HeaderContainer>
  );
};

export default AppHeader;
