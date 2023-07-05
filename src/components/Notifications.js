import React, { useState } from "react";
import style from "../components/style.css";
import mark from "../images/mark.webp";
import angela from "../images/angela.webp";
import jacob from "../images/jacob.webp";
import rizky from "../images/rizky.webp";
import kimberly from "../images/kimberly.webp";
import chess from "../images/chess.webp";
import nathan from "../images/nathan.webp";
import anna from "../images/anna.webp";




export default function Notifications() {
    const [notificationCount, setNotificationCount] = useState(3);
    const [notificationRead, setNotificationRead] = useState(false);
    const [showMessage, setShowMessage] = useState(false);
    

    const markAllAsRead = () => {
        setNotificationCount(0);
        setNotificationRead(true);
    }

    const toggleMessage = () => {
        setShowMessage(!showMessage);
    }



    return(
        <>
        <div className="container">
       <div className="notifications-container">
            <div className="notifications">
                <h2>Notification</h2>
                <span className="num">{notificationCount}</span>
                <span className="mark" onClick={markAllAsRead}>Mark all as read</span>
            </div>

            <div className={`profile-card ${notificationRead ? 'read' : ''}`}>
                <img src={mark} alt="user"/>
                <div className="card-content">
                    <div className="info">
                        <span className="name">Mark Webber</span>
                        <span className="activity">reacted to your recent post</span>
                        <span className="post">My first tournament today!</span>
                        { notificationRead ? null : <span className="dot"></span> }
                    </div>
                    <span className="time">1m ago</span>
                </div>
            </div>

            <div className={`profile-card ${notificationRead ? 'read' : ''}`}>
                <img src={angela} alt="user"/>
                <div className="card-content">
                    <div className="info">
                        <span className="name">Angela Gray</span>
                        <span className="activity">followed you</span>
                        
                        { notificationRead ? null : <span className="dot"></span> }
                    </div>
                    <span className="time">5m ago</span>
                </div>
            </div>

            <div className={`profile-card ${notificationRead ? 'read' : ''}`}>
                <img src={jacob} alt="user"/>
                <div className="card-content">
                    <div className="info">
                        <span className="name">Jacob Thompson</span>
                        <span className="activity">has joined your group</span>
                        <span className="post">Chess Club</span>
                        {notificationRead ? null : <span className="dot"></span> }
                    </div>
                    <span className="time">1 day ago</span>
                </div>
            </div>

            <div className="profile-card-rizky">
                <img src={rizky} alt="user"/>
                <div className="card-content" onClick={toggleMessage}>
                    <div className="info">
                        <span className="name">Rizky Hasannudin</span>
                        <span className="activity">sent you a private message</span>
                        
                        
                    </div>
                    <span className="time">5 days ago</span>
                    {showMessage && (
                    <span className="message">Hello, thanks for setting up the Chess Club. 
                        I've been a member for a few weeks now and I'm already having lots of fun and improving my game.
                    </span> )}
                </div>
            </div>

            <div className="profile-card-kimberly">
                <img src={kimberly} alt="user"/>
                <div className="card-content">
                    <div className="info">
                        <span className="name">kimberly Smith</span>
                        <span className="activity">commented on your picture</span>
                        
                        
                    </div>
                    
                    <div className="kim">
                        <span className="time">1 week ago </span>
                    <img src={chess} alt="chess" className="chess" />
                    </div>
                </div>
            </div>

            <div className="profile-card-nathan">
                <img src={nathan} alt="user "/>
                <div className="card-content">
                    <div className="info">
                        <div className="test">
                            <span className="name-nathan">Nathan Peterson</span>
                            <span className="activity">reacted to your recent post</span>
                            <span className="post">5 end-game strategies to increase your win rate</span>
                        </div>
                        
                        
                    </div>
                    <span className="time">2 weeks ago</span>
                </div>
            </div>

            <div className="profile-card-anna">
                <img src={anna} alt="user"/>
                <div className="card-content">
                    <div className="info">
                        <span className="name">Anna Kim</span>
                        <span className="activity">left the group</span>
                        <span className="post">Chess Club</span>
                        
                    </div>
                    <span className="time">2 weeks ago</span>
                </div>
            </div>
        </div>
            
            
    </div>
    <div className="coded-by">
        <p>Challenge by Frontend Mentor. Coded by Shubham Sinha.</p>
    </div>
    </>
    ); 
}