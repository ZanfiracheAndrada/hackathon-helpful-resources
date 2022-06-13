import React from "react";
import "./TopicTable.scss";

const TopicTable = (props) => {
  return (
    <div>
      <table className="table__wrapper">
        <thead className="table__header-wrapper">
          <tr className="table__header-row">
            <th className="table__header" colSpan="3">
              Name
            </th>
            <th className="table__header">Description</th>
            <th className="table__header">Resources</th>
          </tr>
        </thead>
        <tbody>
          {props.topics.map((key) => {
            return (
              <tr className="table__row-body">
                <td className="table__details table__details--1 ">
                  {" "}
                  {key.name}
                </td>
                <td className="table__details table__details--2">
                  {key.description}
                </td>
                <td className="table__details table__details--3">
                  {key.resources.map((link) => {
                    return (
                      <ul>
                        <li className="table__list">
                          <a
                            className="table__list-link"
                            href={link}
                            target="_blank"
                            rel="noreferrer"
                          >
                            {link}
                          </a>
                        </li>
                      </ul>
                    );
                  })}
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};
export default TopicTable;
