import FriendsSidebar from "../components/sidebar/FriendsSidebar.tsx";
import MainTabsSidebar from "../components/sidebar/MainTabsSidebar.tsx";
import { useUserQuery } from "../hooks/queries/useUserQuery.ts";
import UserDataEditInput from "../components/input/UserDataEditInput.tsx";
import { useForm } from "react-hook-form";
import React, { useEffect, useState } from "react";
import { RegisteredUser } from "../models/RegisteredUser.ts";
import GenderSelect from "../components/select/GenderSelect.tsx";
import AnimatedPencilWithSquareIcon from "../icons/AnimatedPencilWithSquareIcon.tsx";
import { useUpdateUserMutation } from "../hooks/mutations/useUpdateUserMutation.ts";
import { UpdateUserRequest } from "../models/UpdateUserRequest.ts";
import toast from "react-hot-toast";

type FormFields =
  | "firstName"
  | "lastName"
  | "username"
  | "email"
  | "country"
  | "city"
  | "gender";

const AccountSettings = () => {
  const { user, fetchingUser } = useUserQuery();
  const {
    register,
    formState: { errors },
    handleSubmit,
    reset,
  } = useForm();

  const [initialUserData, setInitialUserData] = useState<RegisteredUser>(
    {} as RegisteredUser,
  );
  const [editedUserData, setEditedUserData] = useState<RegisteredUser>(
    {} as RegisteredUser,
  );

  const [hasChanges, setHasChanges] = useState<boolean>(false);
  const [isGenderEditButtonHovered, setIsGenderEditButtonHovered] =
    useState(false);
  const [isGenderSelectDisabled, setIsGenderSelectDisabled] = useState(true);
  const { updateUser, updatingUser } = useUpdateUserMutation(() => {
    toast.success("User updated successfully!");
    reset();
  });

  useEffect(() => {
    if (user) {
      setInitialUserData(user);
      setEditedUserData(user);
    }
  }, [user]);

  useEffect(() => {
    if (!initialUserData || !editedUserData) return;

    const isChanged = (
      Object.keys(initialUserData) as (keyof RegisteredUser)[]
    ).some((key) => {
      if (editedUserData[key] !== "") {
        return initialUserData[key] !== editedUserData[key];
      }

      return false;
    });

    setHasChanges(isChanged);
  }, [editedUserData, initialUserData]);

  const handleChange =
    (field: FormFields) => (event: React.ChangeEvent<HTMLInputElement>) => {
      setEditedUserData((prev) => ({ ...prev, [field]: event.target.value }));
    };

  if (fetchingUser || updatingUser) {
    return;
  }

  const data: {
    type: string;
    title: string;
    register: FormFields;
    errors?: any;
  }[] = [
    {
      type: "text",
      title: "First Name",
      register: "firstName",
      errors: errors?.firstName?.message,
    },
    {
      type: "text",
      title: "Last Name",
      register: "lastName",
      errors: errors?.lastName?.message,
    },
    {
      type: "text",
      title: "Username",
      register: "username",
      errors: errors?.username?.message,
    },
    {
      type: "email",
      title: "E-mail",
      register: "email",
      errors: errors?.email?.message,
    },
    {
      type: "text",
      title: "Country",
      register: "country",
      errors: errors?.country?.message,
    },
    {
      type: "text",
      title: "City",
      register: "city",
      errors: errors?.city?.message,
    },
  ];

  const submit = (updateRequest: UpdateUserRequest) => {
    console.log("updateRequest", updateRequest);
    updateUser(updateRequest);
  };

  return (
    <div className={"flex h-full w-full"}>
      <MainTabsSidebar />
      <main className={"h-full w-full p-4"}>
        <div
          className={
            "flex h-[500px] w-full flex-col rounded-xl bg-custom-gray-100 p-2"
          }
        >
          <div className={"flex h-auto w-full justify-between"}>
            <div className={"flex h-auto w-[49%] flex-col gap-2"}>
              {data.slice(0, 4).map((data, index) => (
                <UserDataEditInput
                  key={index}
                  type={data.type}
                  title={data.title}
                  register={{
                    ...register(data.register, {
                      onChange: handleChange(data.register),
                    }),
                  }}
                  inputValue={user?.[data.register]}
                  errors={data.errors}
                />
              ))}
            </div>
            <div className={"flex h-auto w-[49%] flex-col gap-2"}>
              {data.slice(4).map((data, index) => (
                <UserDataEditInput
                  key={index}
                  type={data.type}
                  title={data.title}
                  register={{
                    ...register(data.register, {
                      onChange: handleChange(data.register),
                    }),
                  }}
                  inputValue={user?.[data.register]}
                  errors={data.errors}
                />
              ))}
              <div className={"flex h-[65px] w-full items-center gap-4"}>
                <label className={"w-[100px] text-xl text-custom-white-100"}>
                  Gender
                </label>
                <GenderSelect
                  className={"h-[65px] w-[250px] rounded-xl border-2"}
                  register={register("gender")}
                  disabled={isGenderSelectDisabled}
                  defaultValue={user?.gender}
                />
                <button
                  onClick={() =>
                    setIsGenderSelectDisabled(!isGenderSelectDisabled)
                  }
                  onMouseEnter={() => setIsGenderEditButtonHovered(true)}
                  onMouseLeave={() => setIsGenderEditButtonHovered(false)}
                  className={"size-8"}
                >
                  <AnimatedPencilWithSquareIcon
                    isHovered={isGenderEditButtonHovered}
                    className={"size-8"}
                  />
                </button>
              </div>
            </div>
          </div>
          {hasChanges && (
            <button
              onClick={handleSubmit((data) =>
                submit({
                  userName: data.userName,
                  email: data.email,
                  firstName: data.firstName,
                  lastName: data.lastName,
                  gender: data.gender,
                  country: data.country,
                  city: data.city,
                }),
              )}
              className={
                "ml-auto mt-auto h-[50px] w-[175px] rounded-lg border-2 uppercase text-custom-white-100"
              }
            >
              Save Changes
            </button>
          )}
        </div>
      </main>
      <FriendsSidebar />
    </div>
  );
};

export default AccountSettings;
