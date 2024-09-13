import React from "react";
import CodePreviewCard from "../CodePreviewCard";
import NoDataFound from "../NoDataFound";

const ContentDisplay = ({
  data,
  filteredData,
  handleUpdate,
  handleDelete,
  handleDetils,
}) => (
  <div>
    {filteredData.length === 0 ? (
      <NoDataFound message="No data at the moment. Try again or add" />
    ) : (
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 my-4 py-2">
        {(filteredData || data).map((item) => (
          <CodePreviewCard
            key={item.id}
            id={item.id}
            title={item.title}
            description={item.description}
            codeSnippet={item.codeSnippet}
            handleUpdate={handleUpdate}
            handleDelete={handleDelete}
            handleDetils={handleDetils}
          />
        ))}
      </div>
    )}
  </div>
);

export default ContentDisplay;
