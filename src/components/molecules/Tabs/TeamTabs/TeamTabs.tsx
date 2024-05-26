import React from 'react';

const TeamTabs = () => {
    return (
        <div className="mb-4 border-b-2 border-light-grey dark:border-light-grey">
            <ul className="flex flex-wrap -mb-px text-sm font-medium text-center" id="default-tab"
                data-tabs-toggle="#default-tab-content" role="tablist">
                <li className="me-2" role="presentation">
                    <button className="inline-block p-4 border-b-2 border-blue rounded-t-lg" id="profile-tab"
                            data-tabs-target="#profile" type="button" role="tab" aria-controls="profile"
                            aria-selected="true">Участники
                    </button>
                </li>
                <li className="me-2" role="presentation">
                    <button
                        className="inline-block p-4 border-b-1 border-light-grey rounded-t-lg hover:text-light-grey hover:border-light-grey dark:hover:text-light-grey"
                        id="dashboard-tab" data-tabs-target="#dashboard" type="button" role="tab"
                        aria-controls="dashboard" aria-selected="false">Заявки
                    </button>
                </li>
                <li className="me-2" role="presentation">
                    <button
                        className="inline-block p-4 border-b-1 border-light-grey rounded-t-lg hover:text-light-grey hover:border-light-grey dark:hover:text-light-grey"
                        id="settings-tab" data-tabs-target="#settings" type="button" role="tab" aria-controls="settings"
                        aria-selected="false">Приглашения
                    </button>
                </li>
            </ul>
        </div>
    );
};

export default TeamTabs;