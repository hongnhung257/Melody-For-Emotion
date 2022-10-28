import React, { useRef, useState } from "react";
import Tippy from "@tippyjs/react";
import "tippy.js/dist/tippy.css";

import classNames from "classnames/bind";
import styles from "./search.module.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faSearch,
  faSpinner,
  faXmark,
} from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";

const cx = classNames.bind(styles);
export default function Search() {
  const [searchValue, setSearchValue] = useState("");
  const [searchResult, setSearchResult] = useState([]);
  const [showResult, setShowResult] = useState(false);
  const [loading, setLoading] = useState(false);

  const inputRef = useRef();
  const handleHideResult = () => {
    setShowResult(false);
  };
  const handleChange = (e) => {
    const searchValue = e.target.value;
    if (!searchValue.startsWith(" ")) {
      setSearchValue(searchValue);
    }
  };
  const handleClear = () => {
    setSearchValue("");
    setSearchResult([]);
    inputRef.current.focus();
  };

  return (
    <>
      <Tippy
        interactive
        // visible={showResult && searchResult.length > 0}
        visible
        render={(attrs) => (
          <div className={cx("search-result")} tabIndex="-1" {...attrs}>
            <div className={cx("search-content")}>
              <ul className={cx("search-list")}>
                <li className={cx("search-item")}>
                  <Link className={cx("search-link")}>
                    <FontAwesomeIcon icon={faSearch} />
                    <p className={cx("text")}>Drive My Car</p>
                  </Link>
                </li>
                <li className={cx("search-item")}>
                  <Link className={cx("search-link")}>
                    <FontAwesomeIcon icon={faSearch} />
                    <p className={cx("text")}>Drive My Car</p>
                  </Link>
                </li>
                <li className={cx("search-item")}>
                  <Link className={cx("search-link")}>
                    <FontAwesomeIcon icon={faSearch} />
                    <p className={cx("text")}>Drive My Car</p>
                  </Link>
                </li>
                <li className={cx("search-item")}>
                  <Link className={cx("search-link")}>
                    <FontAwesomeIcon icon={faSearch} />
                    <p className={cx("text")}>Drive My Car</p>
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        )}
        onClickOutside={handleHideResult}
      >
        <div className={cx("search")}>
          <button className={cx("icon-search")}>
            <FontAwesomeIcon icon={faSearch} />
          </button>
          <input
            ref={inputRef}
            placeholder="search..."
            className={cx("input-search")}
            value={searchValue}
            spellCheck={false}
            onChange={handleChange}
            onFocus={() => setShowResult(true)}
          />
          {!!searchValue && !loading && (
            <button className={cx("icon-close")} onClick={handleClear}>
              <FontAwesomeIcon icon={faXmark} />
            </button>
          )}
          {loading && (
            <FontAwesomeIcon className={cx("loading")} icon={faSpinner} />
          )}
        </div>
      </Tippy>
    </>
  );
}
