import "./index.css";
import SingleInput from "../SingleInput";
import Btn from "../Btn";
import { useState } from "react";
import { useCreatePost } from "#/hooks/useCreatePost";

type PostCreatorType = {
  manageIsPostAdded: (isSuccess: boolean, errorMessage: string) => void;
};

const PostCreator = ({ manageIsPostAdded }: PostCreatorType) => {
  const [inputValue, setInputValue] = useState("");
  const { mutate: createPost } = useCreatePost({
    onSuccess: (onSuccess) => manageIsPostAdded(true, onSuccess),
    onError: (error) =>
      manageIsPostAdded(false, error.response.data.error.message),
  });

  const getInputValue = (e: React.ChangeEvent<HTMLInputElement>) =>
    setInputValue(e.target.value);

  const passInputValue = (e: React.ChangeEvent<HTMLFormElement>) => {
    e.preventDefault();
    setInputValue("");
    createPost(inputValue);
  };

  return (
    <form className="post-creator" onSubmit={passInputValue}>
      <img src="https://constel-hr-frontend.s3.eu-central-1.amazonaws.com/nemanja_malesija.jpeg" />
      <SingleInput
        type="text"
        variation="input--large"
        name=""
        placeholder="What's on your mind?"
        onChange={getInputValue}
        value={inputValue}
      />
      <Btn variation="primary--large" type="submit">
        New Post
      </Btn>
    </form>
  );
};

export default PostCreator;
