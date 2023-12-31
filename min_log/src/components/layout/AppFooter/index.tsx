import Link from "next/link";
import React from "react";
import * as a from "./style";

const AppFooter = () => {
  return (
    <a.AppFooterBox>
      <div>
        <a href="https://github.com/wlals1126" target="_blank">
          <img src="/github.svg" alt="github_icon" />
          wlals1126
        </a>
        <a href="" target="_blank">
          <img src="" alt="about_icon" />
          about
        </a>
        <div>
          <div>
            <img src="/email.svg" alt="email_icon" />
          </div>
          zzzm1n126@gmail.com
        </div>
      </div>
      <Link href="/login" legacyBehavior>
        <a>
          <div />
        </a>
      </Link>
    </a.AppFooterBox>
  );
};

export default AppFooter;
