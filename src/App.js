import React, {useEffect, useState} from "react";
import {useQuery, gql} from "@apollo/client";
import {LOAD_USER_INFO} from "./services/graphql/queries";

import './assets/styles/App.css';
import SearchBar from "./components/SearchBar";
import {FaMoon} from "react-icons/fa";

function App() {

    const {error, loading, data} = useQuery(LOAD_USER_INFO)
    const [user, setUser] = useState(null)

    useEffect(() => {
        if (data) {
            console.log(data)
            setUser(data["user"])
        }
    }, [data])

  return (
    <div className="App">
      <div className={"container"}>
          <div className={"header"}>
              <div className={"app-name"}>
                  devfinder
              </div>
              <div>
                  <div className={"light-dark"}>
                      DARK <FaMoon />
                  </div>
                  <span className={"light-dark-logo"}>
              </span>
              </div>
          </div>

          <SearchBar />

          <div className={"profile-container"}>
              <div className={"left"}>
                  <img src={user ? user["avatarUrl"]:""} alt={"avatar"}/>
              </div>

              <div className={"right"}>
                    <div className={"general-info"}>
                       <div className={"user"}>
                           <h2>{user ? user["name"]:null}</h2>
                           <span>@{user ? user["login"]:null}</span>
                       </div>
                        <div className={"join"}>
                            Joined 11 May 2019
                        </div>
                    </div>
                    <div className={"bio"}>
                        {user ? user["bio"] : null}
                    </div>
                    <div className={"badges"}>
                        <div className={"badge"}>
                            <span className={"badge-name"}>Repos</span>
                            <span className={"badge-value"}>{user ? user["repositories"]["totalCount"] : null}</span>
                        </div>

                        <div className={"badge"}>
                            <span className={"badge-name"}>Followers</span>
                            <span className={"badge-value"}>{user ? user["followers"]["totalCount"]:null}</span>
                        </div>

                        <div className={"badge"}>
                            <span className={"badge-name"}>Following</span>
                            <span className={"badge-value"}>{user ? user["following"]["totalCount"]:null}</span>
                        </div>

                    </div>

                    <div className={"extra"}>

                    </div>
              </div>
          </div>

      </div>
    </div>
  );
}

export default App;
