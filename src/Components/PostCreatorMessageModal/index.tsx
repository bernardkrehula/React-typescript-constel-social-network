import "./index.css";

type PostCreatorMessageModalType = {
  isPostAdded: boolean;
  postModalMessage: string;
};

const PostCreatorMessageModal = ({
  isPostAdded,
  postModalMessage,
}: PostCreatorMessageModalType) => {
  return (
    <div className="postCreatorSuccessModal">
      {isPostAdded ? (
        <svg
          className="checkmark"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 52 52"
        >
          {" "}
          <circle
            className="checkmark__circle"
            cx="26"
            cy="26"
            r="25"
            fill="none"
          />{" "}
          <path
            className="checkmark__check"
            fill="none"
            d="M14.1 27.2l7.1 7.2 16.7-16.8"
          />
        </svg>
      ) : (
        <svg
          className="cross"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 52 52"
        >
          <circle className="cross_circle" cx="26" cy="26" r="25" fill="none" />
          <path
            className="cross_check"
            fill="none"
            d="M14.1 14.1l23.8 23.8 m0,-23.8 l-23.8,23.8"
          />
        </svg>
      )}
      <span>{isPostAdded ? 'Post successfully added.' : postModalMessage}</span>
    </div>
  );
};
export default PostCreatorMessageModal;
