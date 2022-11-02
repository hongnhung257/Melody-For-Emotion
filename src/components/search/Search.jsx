import React, { useEffect, useRef, useState } from "react";
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
  const [visible, setVisible] = useState(false);
  const [searchResult, setSearchResult] = useState([]);
  const [showResult, setShowResult] = useState(false);
  const [loading, setLoading] = useState(false);

  const inputRef = useRef();
  const handleHideResult = () => {
    setShowResult(false);
  };

  const onChangeInput = (e) => {
    const value = e.target.value;
    if (!searchValue.startsWith(" ")) {
      setSearchValue(value);
    }
  };
  const handleClear = () => {
    setSearchValue("");
    setSearchResult([]);
    inputRef.current.focus();
  };

  const handleClick = (e) => {
    console.log(e.target.innerHTML);
  };
  return (
    <>
      {console.log(visible)}
      <Tippy
        interactive
        // visible={showResult && searchResult.length > 0}
        visible={showResult || searchValue.length > 0}
        // offset={[0, -35]}
        // visible
        // zIndex={1}
        render={(attrs) => (
          <div className={cx("search-result")} tabIndex="-1" {...attrs}>
            <div className={cx("search-content")}>
              <ul className={cx("search-list")}>
                <li className={cx("search-item")}>
                  <Link className={cx("search-link")} onClick={handleClick}>
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
            onChange={onChangeInput}
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
