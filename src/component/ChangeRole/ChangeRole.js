// ./src/components/RoleSelect.js
import React, { useState } from "react";
import { TiTick } from "react-icons/ti";
import { useDispatch, useSelector } from "react-redux";
import { toast } from "react-toastify";
import { getUsers, upgradeRole } from "../../redux/features/AuthSlice";

const ChangeRole = ({ id, email }) => {
  const [roleToSet, setRoleToSet] = useState("");
  // const { isSuccess } = useSelector((state) => state.auth);

  const dispatch = useDispatch();
  const handleChangeRole = async (id) => {
    // e.preventDefault();

    if (!roleToSet) {
      toast.error("please select the role first");
    }

    const userData = {
      id: id,
      role: roleToSet,
    };

    await dispatch(upgradeRole(userData));

    await dispatch(getUsers());
  };

  return (
    <div>
      <div className="border-b border-gray-400  ">
        <select
          className="outline-none w-28 h-full bg-gray-200 py-1 "
          onChange={(e) => setRoleToSet(e.target.value)}
        >
          <option selected value="">
            --select--
          </option>
          <option value="admin">Admin</option>
          <option value="vendor">Vendor</option>
          <option value="user">User</option>
          <option value="suspend">Suspend</option>
        </select>
      </div>
      <button
        className={`bg-sky-500 p-[.23rem]`}
        onClick={() => handleChangeRole(id, roleToSet, email)}
      >
        <TiTick className="w-[1.4rem] h-[1.3rem] hover:scale-150  transition-all ease-linear duration-200" />
      </button>
    </div>
  );
};

export default ChangeRole;
