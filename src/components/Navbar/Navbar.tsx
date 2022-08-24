import { useAppDispatch } from '../../redux/hooks/hooks';
import * as actions from '../../redux/actionCreators/notesAC';
import { ChangeEvent, useState, useRef } from 'react';
import { GiHamburgerMenu } from 'react-icons/gi';
import {
  AiOutlineSearch,
  AiOutlineDelete,
  AiOutlineCloudUpload,
} from 'react-icons/ai';
import { BiDotsVertical } from 'react-icons/bi';
import logo from '../../assets/logo.png';
import deleteIcon from '../../assets/delete.svg';
import {
  AccountCircleOutlined as AccountsIcon,
  ViewAgendaOutlined as ListIcon,
} from '@material-ui/icons';
import { IconButton, Tooltip } from '@material-ui/core';

import '../../styles/style.css';

export interface Props {
  setSearch: (value: string) => void;
}

const Navbar = ({ setSearch }: Props) => {
  const dispatch = useAppDispatch();
  const inputRef = useRef() as React.MutableRefObject<HTMLInputElement>;

  const [searchTerm, setSearchTerm] = useState<string>('');

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(e.target.value);
    setSearch(searchTerm);
  };

  const handleDeleteAll = () => {
    dispatch(actions.deleteAllNotes());
  };

  const handleClear = () => {
    inputRef.current.value = '';
    setSearchTerm('');
    setSearch('');
  };

  return (
    <nav className="navbar">
      <div className="nav-group">
        <div className="menu-item">
          <GiHamburgerMenu className="icon" />
        </div>
        <div className="menu-item">
          <div className="navbar-brand">
            <img src={logo} alt="google keep logo" />
            <h1>Keep</h1>
          </div>
        </div>
      </div>
      <div className="nav-group">
        <div className="menu-item">
          <div className="search-div">
            <AiOutlineSearch className="icon" />
            <input
              ref={inputRef}
              type="text"
              name="search"
              placeholder="Поиск"
              onChange={handleChange}
            />
            {searchTerm ? (
              <button onClick={handleClear}>
                <img src={deleteIcon} alt="" />
              </button>
            ) : null}
          </div>
        </div>
      </div>
      <div className="nav-group">
        <div className="menu-item md">
          <Tooltip title="Save to cloud">
            <IconButton aria-label="Save to cloud">
              <AiOutlineCloudUpload className="icon" />
            </IconButton>
          </Tooltip>
        </div>
        <div className="menu-item md">
          <Tooltip title="Delete All">
            <IconButton aria-label="Delete All" onClick={handleDeleteAll}>
              <AiOutlineDelete className="icon" />
            </IconButton>
          </Tooltip>
        </div>
        <div className="menu-item md">
          <IconButton aria-label="toggle list view">
            <ListIcon />
          </IconButton>
        </div>
        <div className="menu-item md">
          <Tooltip title="More">
            <IconButton aria-label="More">
              <BiDotsVertical className="icon" />
            </IconButton>
          </Tooltip>
        </div>
        <div className="menu-item md">
          <IconButton
            edge="end"
            aria-label="account of current user"
            aria-haspopup="true"
          >
            <AccountsIcon />
          </IconButton>
        </div>
        <div className="menu-item">
          <div className="dp"></div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
