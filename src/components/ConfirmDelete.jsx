import Button from "./Button";

function ConfirmDelete({ resourceName, onClose, onConfirm }) {
  return (
    <div className="w-[320px] space-y-3 rounded-lg border bg-white p-5 shadow-lg sm:w-[460px] sm:p-8">
      <h1 className="text-lg font-semibold md:text-xl">
        Delete {resourceName}
      </h1>

      <p className="text-color_text text-sm">
        Are you sure you want to delete this {resourceName} permanently? This
        action cannot be undone.
      </p>

      <div className="flex justify-end gap-3">
        <Button onClick={onClose} className="rounded-md border px-3">
          Cancel
        </Button>
        <Button
          variation="danger"
          className="rounded-md px-3 py-1"
          onClick={onConfirm}
        >
          Delete
        </Button>
      </div>
    </div>
  );
}

export default ConfirmDelete;
