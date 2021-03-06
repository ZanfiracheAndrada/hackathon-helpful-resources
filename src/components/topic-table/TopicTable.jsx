import React from "react";
import "./TopicTable.scss";

const TopicTable = props => {
  let filteredTopics = props.topics;

  if (props.searchTerm) {
    filteredTopics = filteredTopics.filter(topic =>
      topic.name.toLowerCase().includes(props.searchTerm.toLowerCase())
    );
    if (filteredTopics.length === 0) {
      filteredTopics = props.topics;
    }
  }

  return (
    <div>
      <table className="table">
        <thead className="table__header-wrapper">
          <tr className="table__header-row">
            <th className="table__header table__header-1">Concept</th>
            <th className="table__header table__header-2">Description</th>
            <th className="table__header table__header-3">Resources</th>
          </tr>
        </thead>
        <tbody>
          {filteredTopics.map(key => {
            return (
              <tr className="table__row-body">
                <td className="table__details table__details--1 "> {key.name}</td>
                <td className="table__details table__details--2">{key.description}</td>
                <td className="table__details table__details--3">
                  {key.resources.map(link => {
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
