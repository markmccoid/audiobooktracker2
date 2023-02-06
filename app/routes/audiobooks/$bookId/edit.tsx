import { Outlet } from "@remix-run/react";

function Edit() {
  return (
    <div>
      Editing
      <Outlet />
    </div>
  );
}

export default Edit;
