
import Home from './pages/Home';
import Dashboard from './pages/Dashboard';
import Add from './pages/students/Add';
import Student from './pages/Student';
import Book from './pages/Book';
import Product from './pages/Product';
import Advertise from './pages/Advertise';
import Category from './pages/Category';
import Author from './pages/Author';
import Payment from './pages/Payment';
import Promocode from './pages/Promocode';
import Membershipplan from './pages/Membershipplan';
import Shop from './pages/Shop';
import User from './pages/User';
import State from './pages/State';
import Addstudent from './pages/Addstudent';
import Addadvertise from './pages/Addadvertise';
import Addbook from './pages/Addbook';
import Addmembershipplan from './pages/Addmembershipplan';
import Addproduct from './pages/Addproduct';
import Addshop from './pages/Addshop';
import Adduser from './pages/Adduser';

import Editstudent from './pages/Editstudent';
import Editadvertise from './pages/Editadvertise';
import Editbook from './pages/Editbook';
import Editmembershipplan from './pages/Editmembershipplan';
import Editproduct from './pages/Editproduct';
import Editshop from './pages/Editshop';
import Edituser from './pages/Edituser';

import Showstudent from './pages/Showstudent';
import Showproduct from './pages/Showproduct';
import Showshop from './pages/Showshop';
import Showbook from './pages/Showbook';

import {BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <div className="App">
    <Router>
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/dashboard' element={<Dashboard/>} />
        <Route path='/students/add' element={<Add/>} />
        <Route path='/student' element={<Student/>} />
        <Route path='/book' element={<Book/>} />
        <Route path='/product' element={<Product/>} />
        <Route path='/advertise' element={<Advertise/>} />
        <Route path='/category' element={<Category/>} />
        <Route path='/author' element={<Author/>} />
        <Route path='/payment' element={<Payment/>} />
        <Route path='/Promocode' element={<Promocode/>} />
        <Route path='/Membershipplan' element={<Membershipplan/>} />
        <Route path='/shop' element={<Shop/>} />
        <Route path='/user' element={<User/>} />
        <Route path='/state' element={<State/>} />
        <Route path='/addstudent' element={<Addstudent/>} />
        <Route path='/addadvertise' element={<Addadvertise/>} />
        <Route path='/addbook' element={<Addbook/>} />
        <Route path='/addmembershipplan' element={<Addmembershipplan/>} />
        <Route path='/addproduct' element={<Addproduct/>} />
        <Route path='/addshop' element={<Addshop/>} />
        <Route path='/adduser' element={<Adduser/>} />
        
        <Route path='/showstudent/:id' element={<Showstudent/>} />
        <Route path='/editstudent/:id' element={<Editstudent/>} />
        <Route path='/editadvertise' element={<Editadvertise/>} />
        <Route path='/editbook' element={<Editbook/>} />
        <Route path='/editmembershipplan' element={<Editmembershipplan/>} />
        <Route path='/editproduct' element={<Editproduct/>} />
        <Route path='/editshop' element={<Editshop/>} />
        <Route path='/edituser' element={<Edituser/>} />

        <Route path='/showstudent/:id' element={<Showstudent/>} />
        <Route path='/showbook' element={<Showbook/>} />
        <Route path='/showproduct' element={<Showproduct/>} />
        <Route path='/showshop' element={<Showshop/>} />
      </Routes>
    </Router>

    </div>
  );
}

export default App;
