import React, { useState } from "react";
import { MainLayout } from "./layout";
import { IconButton, Modal, TextField } from "./components/ui";
import {
  AddCode,
  CodePreviewCard,
  DeleteConfirmation,
  DynamicForm,
  NoDataFound,
} from "./components";
import { FaPlus } from "react-icons/fa";
import useToggle from "./hooks/useToggle";
import { formConfig } from "./utlis/formConfig";
import useLocalStorage from "./hooks/useLocalStorage";
import CodePreviewComponent from "./components/code/CodePreviewComponent";

const App = () => {
  const {
    state: addIsOpen,
    toggle: addToggle,
    reset: addResetOpen,
  } = useToggle();
  const {
    state: deleteIsOpen,
    toggle: deleteToggle,
    reset: deleteResetOpen,
  } = useToggle();

  const {
    state: updateIsOpen,
    toggle: updateToggle,
    reset: updateResetOpen,
  } = useToggle();

  const {
    state: detailsIsOpen,
    toggle: detailsToggle,
    reset: detailsResetOpen,
  } = useToggle();

  const [itemToDelete, setItemToDelete] = useState(null);
  const [itemToUpdate, setItemToUpdate] = useState(null);
  const [detailId, setDetailId] = useState(null);

  const { data, addData, updateData, deleteData, getDetails } =
    useLocalStorage();

  const handleFormSubmit = (data) => {
    addData(data);
    addResetOpen();
  };

  const handleUpdate = (id) => {
    updateToggle();
    setItemToUpdate(id);
  };

  const handleUpdateConfirm = (data) => {
    if (itemToDelete) {
      updateData(itemToUpdate, data);
      setItemToUpdate(null);
    }
    updateResetOpen();
  };

  const handleDelete = (id) => {
    setItemToDelete(id);
    deleteToggle();
  };

  const handleDeleteConfirm = () => {
    if (itemToDelete) {
      deleteData(itemToDelete);
      setItemToDelete(null);
    }
    deleteResetOpen();
  };

  const handleDetils = (id) => {
    detailsToggle();
    setDetailId(id);
    getDetails(id);
    const detailsData = getDetails(id);
    console.log("detailsData", detailsData);
  };

  return (
    <MainLayout>
      <section className="p-4">
        <div className="flex flex-wrap my-4 gap-2 items-center">
          <TextField style={{ flex: 1 }} type="text" placeholder="Search..." />
          <IconButton
            className={` text-white bg-primary py-4 px-4 hover:scale-105 rounded-full`}
            icon={FaPlus}
            title="Add"
            onClick={addToggle}
          />
        </div>
        <div className="p-4">
          {data.length === 0 ? (
            <NoDataFound message="No data at the moments do you want to add." />
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 my-4 py-4">
              {data.map((item) => (
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
        <div className="p-6">
          <Modal isOpen={addIsOpen} onClose={addResetOpen} title="Add Code">
            <DynamicForm
              config={formConfig}
              onSubmit={handleFormSubmit}
              onCancel={addResetOpen}
              submitText="Add"
            />
          </Modal>
        </div>
        <div className="p-6">
          <Modal
            isOpen={updateIsOpen}
            onClose={updateResetOpen}
            title="Update Code"
          >
            <DynamicForm
              initialData={getDetails(itemToUpdate)}
              config={formConfig}
              onSubmit={handleUpdateConfirm}
              onCancel={updateResetOpen}
              submitText="Update"
            />
          </Modal>
        </div>
        <div className="p-6">
          <Modal
            isOpen={detailsIsOpen}
            onClose={detailsResetOpen}
            title="Code Preview"
          >
            <CodePreviewComponent
              // data={getDetails(detailId)}
              title={"ittle"}
              description={"fhsdf s"}
              codeSnippet="import { useState, useEffect } from 'react';\n\nconst useCustomHook = () => {\n  const [data, setData] = useState(null);\n  useEffect(() => {\n    fetch('/api/data')\n      .then(response => response.json())\n      .then(data => setData(data));\n  }, []);\n  return data;\n};"
            />
          </Modal>
        </div>
        {/* <AddCode addData={addData} /> */}
        <div className="p-6">
          <Modal
            isOpen={deleteIsOpen}
            onClose={deleteResetOpen}
            title="Confirm Deletion"
          >
            <DeleteConfirmation
              onConfirm={handleDeleteConfirm}
              onCancel={deleteResetOpen}
            />
          </Modal>
        </div>
      </section>
    </MainLayout>
  );
};

export default App;
