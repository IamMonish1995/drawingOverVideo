"use client";
import React, { useState, useEffect } from "react";

import CssBaseline from "@mui/material/CssBaseline";
import { DashboardLayout } from "@/components/dashboard-layout";

export default function Dashboard() {
  return (
    <>
      <CssBaseline/>
      Dashboard
    </>
  );
}
Dashboard.getLayout = (page) => (
  <DashboardLayout>
    {page}
  </DashboardLayout>
);
