import React, { useState, useEffect } from 'react';
import { Boxes, BoxFill, XSquare, CurrencyDollar } from 'react-bootstrap-icons';
import Spinner from 'react-bootstrap/Spinner'
import Layout from '../components/Layout';
import BarChart from '../components/BarChart';
import PieChart from '../components/PieChart';
import "../css/ChartsCSS.css"
import ItemService from '../services/ItemService';
import TokenService from '../services/TokenService';

function Dashboard() {
  const [branch_id, setBranchId] = useState(null);
  const [isMasterAdmin, setIsMasterAdmin] = useState(false);
  const [totalProducts, setTotalProducts] = useState(null);
  const [totalItemStocks, setTotalItemStocks] = useState(null);
  const [totalItemsOutOfStock, setTotalItemsOutOfStock] = useState(null);
  const [totalInventoryCost, setTotalInventoryCost] = useState(null);
  const [barChartData, setBarChartData] = useState(null);
  const [pieChartData, setPieChartData] = useState(null);

  useEffect(() => {
    const fetchBranchIdandRole = async () => {
      try {
        const isMasterAdmin = await TokenService.getIsMasterAdmin();
        const branchID = await TokenService.getAdminBranchID();
        setBranchId(branchID);
        setIsMasterAdmin(isMasterAdmin);
      } catch (error) {
        console.log('Error fetching branch ID');
      }
    };

    const fetchTotalProducts = async () => {
      try {
        const total = await ItemService.getTotalProducts(branch_id, isMasterAdmin);
        setTotalProducts(total.data.total_products);
      } catch (error) {
        console.log('Error fetching total products');
      }
    };

    const fetchTotalItemStocks = async () => {
      try {
        const total = await ItemService.getTotalItemStocks(branch_id, isMasterAdmin);
        setTotalItemStocks(total.data.total_item_stocks);
      } catch (error) {
        console.log('Error fetching total item stocks');
      }
    };

    const fetchTotalItemOutOfStock = async () => {
      try {
        const total = await ItemService.getTotalOutOfStockInBranch(branch_id, isMasterAdmin);
        setTotalItemsOutOfStock(total.data);
      } catch (error) {
        console.log('Error fetching total items out of stock');
      }
    };

    const fetchTotalInventoryCost = async () => {
      try {
        const total = await ItemService.getTotalInventoryCost(branch_id, isMasterAdmin);
        setTotalInventoryCost(total.data.total_inventory_cost);
      } catch (error) {
        console.log('Error fetching total inventory cost');
      }
    };

    const fetchPieChartData = async () => {
      try {
        const results = await ItemService.getItemsPerCategory(branch_id);

        const labels = results.data.map(item => item.category);
        const dataValues = results.data.map(item => item.count);

        const chartData = {
            labels: labels,
            datasets: [{
                label: 'Items per Category',
                backgroundColor: 'rgb(255, 192, 192)',
                borderColor: 'rgb(0)',
                data: dataValues,
            }],
        };
        setPieChartData(chartData);
      } catch (error) {
        console.log('Error fetching pie chart dat');
      }
    };

    const fetchTopItems = async () => {
      try {
          const response = await ItemService.getTopItems(branch_id, isMasterAdmin);
          const items = response.data;

          const labels = items.map(item => `${item.item_name} (${item.size_dimension})`);
          const data = items.map(item => item.total_quantity);

          setBarChartData({
            labels: labels,
            datasets: [
              {
                label: 'Top 10 Items by Quantity',
                backgroundColor: 'rgb(255, 192, 192)',
                borderColor: 'rgb(0)',
                borderWidth: 1,
                data: data,
              },
            ],
          });
      } catch (error) {
        console.log('Error fetching top items:', error);
      }
    };

    if (branch_id) {
      fetchTotalProducts();
      fetchTotalItemStocks();
      fetchTotalItemOutOfStock();
      fetchTotalInventoryCost();
      fetchTopItems();
      fetchPieChartData();
    } else {
      fetchBranchIdandRole();
    }
  }, [branch_id]);

  const spinnerComponent = () => {
      return (
          <div className="d-flex justify-content-center align-items-center" style={{ height: '100px' }}>
                <Spinner animation="border" />
          </div>
      )
  }
  
  return (
    <Layout>
      <div className="p-3 bg-light">
        <div className="container-fluid">
          <div className="row">
            <div className="col-12 col-sm-6 col-md-4 col-lg-3 p-3 bg-light">
              <div className="d-flex justify-content-between p-4 align-items-center bg-white border border-secondary shadow-sm">
                <BoxFill className="fs-1 text-danger" />
                <div>
                  <span>Products</span>
                  {totalProducts ? (
                      <h2>{totalProducts?.toLocaleString()}</h2>
                  ) : (
                      spinnerComponent()
                  )}
                </div>
              </div>
            </div>

            <div className="col-12 col-sm-6 col-md-4 col-lg-3 p-3 bg-light">
              <div className="d-flex justify-content-between p-4 align-items-center bg-white border border-secondary shadow-sm">
                <Boxes className="fs-1 text-primary" />
                <div>
                  <span>Total Item Stocks</span>
                  {totalItemStocks ? (
                      <h2>{totalItemStocks?.toLocaleString()}</h2>
                  ) : (
                      spinnerComponent()
                  )}
                </div>
              </div>
            </div>

            <div className="col-12 col-sm-6 col-md-4 col-lg-3 p-3 bg-light">
              <div className="d-flex justify-content-between p-4 align-items-center bg-white border border-secondary shadow-sm">
                <XSquare className="fs-1 text-danger" />
                <div>
                  <span>Items Out of Stock</span>
                  {totalItemsOutOfStock ? (
                      <h2>{totalItemsOutOfStock?.toLocaleString()}</h2>
                  ) : (
                      <h2>0</h2>
                  )}
                </div>
              </div>
            </div>

            <div className="col-12 col-sm-6 col-md-4 col-lg-3 p-3 bg-light">
              <div className="d-flex justify-content-between p-4 align-items-center bg-white border border-secondary shadow-sm">
                <CurrencyDollar className="fs-1 text-success" />
                <div>
                  <span>Total Inventory Cost</span>
                  {totalInventoryCost ? (
                      <h2>{totalInventoryCost?.toLocaleString()}</h2>
                  ) : (
                      spinnerComponent()
                  )}
                  
                </div>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-12 col-md-8 p-3">
              {barChartData ? (
                  <BarChart chartData={barChartData} />
              ) : (
                  <div className="d-flex justify-content-center align-items-center" style={{ height: '100px' }}>
                    <Spinner animation="border" />
                  </div>
              )}
              
            </div>
            <div className="col-12 col-md-4 p-3">
              {pieChartData ? (
                <PieChart chartData={pieChartData} />
              ) : (
                spinnerComponent()
              )}
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}

export default Dashboard;
