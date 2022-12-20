import React from 'react'

const Tabs = ({}) => {
    const [openTab, setOpenTab] = React.useState(1)

    const tabs = () => {
        return (
            <li className="-mb-px mr-2 last:mr-0 flex-auto text-center">
                <a
                    className={
                        'text-xs font-bold uppercase px-5 py-3 shadow-lg rounded block leading-normal ' +
                        (openTab === 1 ? 'text-gray-800' : 'text-gray-400')
                    }
                    onClick={(e) => {
                        e.preventDefault()
                        setOpenTab(1)
                    }}
                    data-toggle="tab"
                    href="#link1"
                    role="tablist"
                >
                    Profile
                </a>
            </li>
        )
    }

    return (
        <>
            <div className="flex flex-wrap">
                <div className="w-full border-b border-gray-200 dark:border-gray-700">
                    {/* tabs */}
                    <ul
                        className="list-none flex-row flex flex-wrap -mb-px text-sm font-medium text-center text-gray-500 dark:text-gray-400"
                        role="tablist"
                    >
                        <li className="-mb-px mr-2 last:mr-0 flex-auto text-center">
                            <a
                                className={
                                    'text-xs font-bold uppercase px-5 py-3 shadow-lg rounded block leading-normal ' +
                                    (openTab === 1
                                        ? 'text-gray-800'
                                        : 'text-gray-400')
                                }
                                onClick={(e) => {
                                    e.preventDefault()
                                    setOpenTab(1)
                                }}
                                data-toggle="tab"
                                href="#link1"
                                role="tablist"
                            >
                                Profile
                            </a>
                        </li>
                        <li className="-mb-px mr-2 last:mr-0 flex-auto text-center">
                            <a
                                className={
                                    'text-xs font-bold uppercase px-5 py-3 shadow-lg rounded block leading-normal ' +
                                    (openTab === 2
                                        ? 'text-gray-800'
                                        : 'text-gray-400')
                                }
                                onClick={(e) => {
                                    e.preventDefault()
                                    setOpenTab(2)
                                }}
                                data-toggle="tab"
                                href="#link2"
                                role="tablist"
                            >
                                Settings
                            </a>
                        </li>
                        <li className="-mb-px mr-2 last:mr-0 flex-auto text-center">
                            <a
                                className={
                                    'text-xs font-bold uppercase px-5 py-3 shadow-lg rounded block leading-normal ' +
                                    (openTab === 3
                                        ? 'text-gray-800'
                                        : 'text-gray-400')
                                }
                                onClick={(e) => {
                                    e.preventDefault()
                                    setOpenTab(3)
                                }}
                                data-toggle="tab"
                                href="#link3"
                                role="tablist"
                            >
                                Options
                            </a>
                        </li>
                    </ul>
                    {/* contents */}
                    <div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-6 shadow-lg rounded">
                        <div className="px-4 py-5 flex-auto">
                            <div className="tab-content tab-space">
                                <div
                                    className={
                                        openTab === 1 ? 'block' : 'hidden'
                                    }
                                    id="link1"
                                >
                                    <p>
                                        Collaboratively administrate empowered
                                        markets via
                                    </p>
                                </div>
                                <div
                                    className={
                                        openTab === 2 ? 'block' : 'hidden'
                                    }
                                    id="link2"
                                >
                                    <p>
                                        Completely synergize resource taxing
                                        relationships via
                                    </p>
                                </div>
                                <div
                                    className={
                                        openTab === 3 ? 'block' : 'hidden'
                                    }
                                    id="link3"
                                >
                                    <p>
                                        Efficiently unleash cross-media
                                        information without
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Tabs
