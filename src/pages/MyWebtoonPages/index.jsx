import React from 'react'
import PageTitle from '../../components/common/PageTitle'
import TabMywebtoon from '../../components/common/TabMywebtoon'
import { Link } from 'react-router-dom'
import Tag from '../../components/common/Tag'
import TagSearchPages from '../TagSearchPages'
import Button from '../../components/common/Button'

// tailwind badge
// https://flowbite.com/docs/components/badge/

const MyWebtoonPages = () => {
    const tags = [
        { id: 0, content: '안녕' },
        { id: 1, content: '반가워' },
    ]

    return (
        <>
            <section>
                <PageTitle title="My웹툰" />
                <div className="content border-b border-gray-300">
                    <div className="flex flex-row items-center">
                        <label className="font-bold text-lg">취향태그 #</label>
                        <Button
                            text={
                                <>
                                    <label className="align-middle text-sm text-gray-400">
                                        편집하기
                                    </label>
                                    <span className="align-middle material-symbols-rounded text-sm text-gray-400">
                                        arrow_forward_ios
                                    </span>
                                </>
                            }
                            link="/edittag"
                        />
                    </div>
                    <div className="bg-gray-100 rounded-xl p-3">
                        {tags.map((tag, index) => (
                            <Tag tag={tag} key={index} />
                        ))}
                    </div>
                </div>
                <div>
                    <TabMywebtoon />
                </div>
            </section>
        </>
    )
}

export default MyWebtoonPages
