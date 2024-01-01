import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { getAllOrdersOfUser } from "../../redux/actions/order";

const TrackOrder = () => {
  const { orders } = useSelector((state) => state.order);
  const { user } = useSelector((state) => state.user);
  const dispatch = useDispatch();

  const { id } = useParams();

  useEffect(() => {
    dispatch(getAllOrdersOfUser(user._id));
  }, [dispatch]);

  const data = orders && orders.find((item) => item._id === id);

  return (
    <div className="w-full h-[80vh] flex justify-center items-center">
      {" "}
      <>
        {data && data?.status === "Processing" ? (
          <h1 className="text-[20px]">Таны захиалгыг дэлгүүрт боловсруулж байна.</h1>
        ) : data?.status === "Transferred to delivery partner" ? (
          <h1 className="text-[20px]">
            Таны захиалга хүргэлтийн хамтрагч болох замд ирлээ.
          </h1>
        ) : data?.status === "Shipping" ? (
          <h1 className="text-[20px]">
            Манай хүргэлтийн хамтрагч таны захиалгыг хүргэж байна.
          </h1>
        ) : data?.status === "Received" ? (
          <h1 className="text-[20px]">
           Таны захиалга танай хотод байна. Манай хүргэлтийн ажилтан хүргэж өгөх болно.
          </h1>
        ) : data?.status === "On the way" ? (
          <h1 className="text-[20px]">
            Манай хүргэлтийн ажилтан таны захиалгыг хүргэж өгөх болно.
          </h1>
        ) : data?.status === "Delivered" ? (
          <h1 className="text-[20px]">Таны захиалгыг хүргэж байна!</h1>
        ) : data?.status === "Processing refund" ? (
          <h1 className="text-[20px]">Таны буцаан олголтыг боловсруулж байна!</h1>
        ) : data?.status === "Refund Success" ? (
          <h1 className="text-[20px]">Таны буцаан олголт амжилттай боллоо!</h1>
        ) : null}
      </>
    </div>
  );
};

export default TrackOrder;
