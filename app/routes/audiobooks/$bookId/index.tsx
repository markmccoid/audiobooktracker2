import { Outlet } from "@remix-run/react";

function BookId() {
  return (
    <div>
      In OUTLET 1
      <Outlet />
    </div>
  );
}

export default BookId;
