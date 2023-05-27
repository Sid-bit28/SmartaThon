function ProfileCard({ teams }) {
     return (
          <div className="card" p-3>
               <div className="card-header-title">{teams.title}</div>
               <div className="card-content">
                    <div className="media-content">
                         <p className="title is-4">{teams.description}</p>
                    </div>
                    <p class="subtitle">{teams.number}</p>
               </div>
               <footer class="card-footer">
                    <p class="card-footer-item">
                         <span>
                              <a href="https://twitter.com/codinghorror/status/506010907021828096"><h3>Apply</h3></a>
                         </span>
                    </p>
               </footer>
          </div >
     );
}

export default ProfileCard;