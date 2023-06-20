import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faArrowUp,
  faArrowDown,
  faUserPlus,
  faUserMinus,
  faUsers,
  faUser,
} from '@fortawesome/free-solid-svg-icons';

export default function CardStats({ category, stat }) {
  return (
    <div className="flex flex-col min-w-0 break-words bg-lightComponents dark:bg-darkComponents rounded-xl mb-6 xl:mb-0 shadow-xl">
      <div className="flex-auto p-4">
        <div className="flex flex-wrap">
          <div className="relative w-full pr-4 max-w-full flex-grow flex-1">
            <h5 className="uppercase font-bold text-xs">{category}</h5>
            <span className="font-semibold text-xl">
              <span
                className={`mr-2 ${
                  category.toLowerCase() === 'total'
                    ? 'text-total'
                    : category === 'positive'
                    ? 'text-positive'
                    : category === 'negative'
                    ? 'text-negative'
                    : 'text-neutral'
                }`}
              >
                {category === 'positive' ? (
                  <FontAwesomeIcon icon={faArrowUp} />
                ) : category === 'negative' ? (
                  <FontAwesomeIcon icon={faArrowDown} />
                ) : null}{' '}
                {stat?.length}
              </span>
            </span>
          </div>
          <div className="relative w-auto pl-4 flex-initial">
            <div
              className={`text-white p-3 text-center inline-flex items-center justify-center w-12 h-12 shadow-lg rounded-full ${
                category === 'total'
                  ? 'bg-total'
                  : category === 'positive'
                  ? 'bg-positive'
                  : category === 'negative'
                  ? 'bg-negative'
                  : 'bg-neutral'
              }`}
            >
              <FontAwesomeIcon
                icon={
                  category === 'total'
                    ? faUsers
                    : category === 'positive'
                    ? faUserPlus
                    : category === 'negative'
                    ? faUserMinus
                    : faUser
                }
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
