export const ItemCount = ({ count, handleCount }) => {
    return (
      <div class="card-body p-4">
        <button
          onClick={() => handleCount("minus")}
          class="btn btn-outline-dark mt-auto"
        >
          -
        </button>
        <span
          id="counter"
          class="text-center"
          >
          {count}
        </span>
        <button
          onClick={() => handleCount("plus")}
          class="btn btn-outline-dark mt-auto"
        >
          +
        </button>
      </div>
    );
  };