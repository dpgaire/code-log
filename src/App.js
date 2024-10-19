import React, { useEffect, useState } from "react";
import { MainLayout } from "./layout";
import { SearchAndAdd } from "./components";
import useLocalStorage from "./hooks/useLocalStorage";
import {
  AddCodeModal,
  ContentDisplay,
  DeleteConfirmationModal,
  DetailsModal,
  UpdateCodeModal,
} from "./components/code";
import { CodeListkeleton } from "./components/skeleton";
import { useModalContext } from "./context";

const App = () => {
  const { data, addData, updateData, deleteData, getDetails, resetData } =
    useLocalStorage();

  const {
    addIsOpen,
    addToggle,
    addResetOpen,
    deleteIsOpen,
    deleteToggle,
    deleteResetOpen,
    updateIsOpen,
    updateToggle,
    updateResetOpen,
    detailsIsOpen,
    detailsToggle,
    detailsResetOpen,
  } = useModalContext();

  const [itemToDelete, setItemToDelete] = useState(null);
  const [itemToUpdate, setItemToUpdate] = useState(null);
  const [detailId, setDetailId] = useState(null);
  const [filteredData, setFilteredData] = useState(data);

  const handleFormSubmit = (data) => {
    addData(data);
    addResetOpen();
  };

  const handleUpdate = (id) => {
    updateToggle();
    setItemToUpdate(id);
  };

  const handleUpdateConfirm = (data) => {
    if (itemToUpdate) {
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
  };

  const handleSearchTermChange = (e) => {
    const term = e.target.value;
    handleSearch(term);
  };

  const handleSearch = (searchTerm = "") => {
    const filterData = data.filter((item) =>
      item.title.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setFilteredData(filterData);
  };

  useEffect(() => {
    setFilteredData(data);
  }, [data]);

  return (
    <MainLayout resetData={resetData}>
      <section className="p-4">
        <SearchAndAdd
          onSearchChange={handleSearchTermChange}
          onAddClick={addToggle}
        />
        {/* <CodeListkeleton /> */}
        <ContentDisplay
          data={data}
          filteredData={filteredData}
          handleUpdate={handleUpdate}
          handleDelete={handleDelete}
          handleDetils={handleDetils}
        />
        <AddCodeModal
          isOpen={addIsOpen}
          onClose={addResetOpen}
          onSubmit={handleFormSubmit}
        />
        <UpdateCodeModal
          isOpen={updateIsOpen}
          onClose={updateResetOpen}
          onSubmit={handleUpdateConfirm}
          initialData={getDetails(itemToUpdate)}
        />
        <DetailsModal
          isOpen={detailsIsOpen}
          onClose={detailsResetOpen}
          data={getDetails(detailId)}
        />
        <DeleteConfirmationModal
          isOpen={deleteIsOpen}
          onClose={deleteResetOpen}
          onConfirm={handleDeleteConfirm}
        />
      </section>
    </MainLayout>
  );
};

export default App;
