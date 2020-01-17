import React from 'react';
import './App.css';
import ArticleCollectionPage from './components/ArticleCollectionPage';

function App() {
  return (
    <div className="App">
      <img src="https://i.imgur.com/tFXlXAY.png" className="logo" alt="logo1"/>
      <ArticleCollectionPage />
      <div class="container-fluid">
  <div class="row content">
 

    <div class="col-sm-9">
      <h4><small>RECENT POSTS</small></h4>
      
      <hr/>
      <h2 >Coding Vs. Knitting</h2>
      <h5><span class="glyphicon glyphicon-time"></span> Post by Claire  January 13, 2020.</h5>
      <h5><span class="label label-danger">Coding</span> <span class="label label-primary">Ipsum</span></h5><br/>
      <p> Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
      <br/><br/>
      
      <h4><small>RECENT POSTS</small></h4>
      <hr/>
      <h2>Knit 1  Blog 2</h2>
      <h5><span class="glyphicon glyphicon-time"></span> Post by Claire Buck </h5>
      <h5><span class="label label-success">Lorem</span></h5><br/>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
      

      
      <div>
        
      </div>
      
      
    


      <h4>Thoughts :</h4>
      <form role="form">
        <div class="form-group">
          <textarea class="form-control" rows="3" required></textarea>
        </div>
        <button type="submit" class="btn btn-success">Submit</button>
      </form>import React from 'react';



      <br/><br/>
      
      <p><span class="badge">2</span> Comments:</p><br/>
      
      <div class="row">
        <div class="col-sm-2 text-center">
          <img src="logoyarn.png" class="img-circle" height="65" width="65" alt="Avatar"/>
        </div>
        <div class="col-sm-10">
          <h4>Coding<small>Utah Standard time PM</small></h4>
          <p> Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
          <br/>
        </div>
        <div class="col-sm-2 text-center">
          <img src="bird.jpg" class="img-circle" height="65" width="65" alt="Avatar"/>
        </div>
        <div class="col-sm-10">
          <h4>Bloggy <small> January 2020 8:25 PM</small></h4>
          <p> Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
          <br/>
          <p><span class="badge">1</span> Comment:</p><br/>
          <div class="row">
            <div class="col-sm-2 text-center">
              <img src="bird.jpg" class="img-circle" height="65" width="65" alt="Avatar"/>
            </div>
            <div class="col-xs-10">
              <button type="submit">Email Me!</button>

              <h4>Test text goes here <small>HelioTraining Project CB</small></h4>
      
              <p> Hey!</p>
              <br/>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>

<footer class="container-fluid">
  <p>Email me!</p>
  
</footer>
    </div>
    
  );
}

export default App;
