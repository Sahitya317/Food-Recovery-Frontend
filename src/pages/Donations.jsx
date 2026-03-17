import React, { useEffect, useState } from "react";

export default function Donations() {
  const [donations, setDonations] = useState([]);
  const [loading, setLoading] = useState(true);

  // ✅ safer user parsing
  const user = JSON.parse(localStorage.getItem("user") || "null");

  useEffect(() => {
    fetchDonations();
  }, []);

  const fetchDonations = async () => {
    try {
      setLoading(true);

      // ✅ use same base URL everywhere (important)
      const res = await fetch("https://food-recovery.onrender.com/api/donations");
      const data = await res.json();

      setDonations(data);
      setLoading(false);
    } catch (err) {
      console.log(err);
      setLoading(false);
    }
  };

  // ✅ DELETE FUNCTION
  const handleDelete = async (id) => {
    try {
      await fetch(`https://food-recovery.onrender.com/api/donations/${id}`, {
        method: "DELETE",
      });

      // update UI instantly
      setDonations((prev) => prev.filter((d) => d._id !== id));
    } catch (err) {
      console.log(err);
    }
  };

  // ✅ FIXED FILTER (safe + robust)
  const userDonations = user
    ? donations.filter(
        (d) =>
          d.email?.trim().toLowerCase() ===
          user.email?.trim().toLowerCase()
      )
    : [];

  // ✅ LOADING STATE
  if (loading) {
    return (
      <p className="text-center mt-10 text-gray-600 font-semibold">
        Loading donations...
      </p>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 px-6 py-12">
      <h1 className="text-3xl font-bold text-center mb-10">
        Your Donations
      </h1>

      {/* ❗ if user not logged in */}
      {!user && (
        <p className="text-center text-red-500 text-lg">
          Please login to view your donations.
        </p>
      )}

      {/* ✅ Empty State */}
      {user && userDonations.length === 0 && (
        <p className="text-center text-gray-500 text-lg">
          No donations yet. Start by donating 🚀
        </p>
      )}

      {/* ✅ Donation Cards */}
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {userDonations.map((donation) => (
          <div
            key={donation._id}
            className="bg-white p-6 rounded-2xl shadow-md border hover:shadow-lg transition"
          >
            <h2 className="text-xl font-bold text-emerald-600 mb-2">
              {donation.name}
            </h2>

            <p className="text-gray-600 mb-1">
              <strong>Email:</strong> {donation.email}
            </p>

            <p className="text-gray-600 mb-1">
              <strong>Type:</strong> {donation.foodType}
            </p>

            <p className="text-gray-600 mb-1">
              <strong>Amount:</strong> {donation.quantity}
            </p>

            <p className="text-gray-500 text-sm mt-3">
              {new Date(donation.createdAt).toLocaleString()}
            </p>

            {/* ✅ DELETE BUTTON */}
            <button
              onClick={() => handleDelete(donation._id)}
              className="mt-4 w-full bg-red-500 text-white py-2 rounded-lg hover:bg-red-600 transition"
            >
              Delete
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}