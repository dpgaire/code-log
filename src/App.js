import React from "react";
import { MainLayout } from "./layout";
import { Button, TextField } from "./components/ui";
import { CodePreviewCard } from "./components";
import data from "./utlis/data.json";

const App = () => {
  return (
    <MainLayout>
      <section className="p-4">
        <div className="flex flex-wrap my-4 gap-2">
          <TextField style={{ flex: 1 }} type="text" placeholder="Search..." />
          <Button text="Add Code" variant="primary" />
        </div>
        <div
          // className="flex flex-wrap my-4 gap-4 justify-center"
          className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 my-4 p-4"
        >
          {data.map((item, index) => (
            <CodePreviewCard
              key={index}
              title={item.title}
              description={item.description}
              codeSnippet={item.codeSnippet}
            />
          ))}
        </div>
      </section>
    </MainLayout>
  );
};

export default App;
