import {  Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './components/Home';
import Task2 from './components/Task2';


function App() {
    return (
        <>
            <div className='main'>
                {/* NAVBAR */}

                <nav class="navbar navbar-expand-lg bg-primary">
                    <div class="container-fluid">
                        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo01" aria-controls="navbarTogglerDemo01" aria-expanded="false" aria-label="Toggle navigation">
                            <span class="navbar-toggler-icon"></span>
                        </button>
                        <div class="collapse navbar-collapse" id="navbarTogglerDemo01">

                            <h3>MITZ</h3>
                            <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                                <li class="nav-item">
                                    <a class="nav-link active" aria-current="page" href="/">Task 1</a>
                                </li>
                                <li class="nav-item">
                                    <a class="nav-link active" href="/Task2">Task2</a>
                                </li>


                            </ul>

                        </div>
                    </div>
                </nav>
                <Routes>
                    <Route path='/' element={<Home />} />
                    <Route path='/Task2' element={<Task2 />} />
                </Routes>
            </div>



        </>
    );
}

export default App;
