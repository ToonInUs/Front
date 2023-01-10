import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import PageTitle from '../../components/common/PageTitle'
import Button from '../../components/common/Button'

const MorePages = () => {
    // username 받기
    const [isLogin, setisLogin] = useState(false)
    let LoginLogoutBtn = () => {
        if (isLogin) {
            // 로그인 상태면 로그아웃 버튼
            return <Button text="로그아웃" color="bright" link="/" />
        } else {
            // 로그아웃 상태면 로그인 버튼
            return <Button text="로그인" color="bright" link="/login" />
        }
    }

    return (
        <>
            <section className="border-b border-gray-300">
                <PageTitle title="더보기" />
                <div className="content">
                    {/* 사용자 이름 변경 */}
                    <Button
                        text={
                            <>
                                <label className="align-middle text-xl">
                                    {}님
                                </label>
                                <span className="align-middle material-symbols-rounded">
                                    arrow_forward_ios
                                </span>
                            </>
                        }
                        link="username"
                    />

                    <LoginLogoutBtn />
                </div>
            </section>
            <div className="flex flex-row">
                <Button
                    text={
                        <>
                            <span className="material-symbols-rounded block">
                                campaign
                            </span>
                            <label className="align-middle text-md">
                                공지사항
                            </label>
                        </>
                    }
                    link="notice"
                    color="lnline"
                />
                <Button
                    text={
                        <>
                            <span className="material-symbols-rounded block">
                                settings
                            </span>
                            <label className="align-middle text-md">설정</label>
                        </>
                    }
                    link="setting"
                    color="lnline"
                />
            </div>
        </>
    )
}

export default MorePages
