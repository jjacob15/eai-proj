/**
 * Created by Jaison.Jacob on 7/11/2018.
 */
import React from 'react';

function toggleFullScreen() {
    if (!document.fullscreenElement // alternative standard method
        && !document.mozFullScreenElement && !document.webkitFullscreenElement && !document.msFullscreenElement) {
        // current working methods
        if (document.documentElement.requestFullscreen) {
            document.documentElement.requestFullscreen();
        } else if (document.documentElement.msRequestFullscreen) {
            document.documentElement.msRequestFullscreen();
        } else if (document.documentElement.mozRequestFullScreen) {
            document.documentElement.mozRequestFullScreen();
        } else if (document.documentElement.webkitRequestFullscreen) {
            document.documentElement.webkitRequestFullscreen(Element.ALLOW_KEYBOARD_INPUT);
        }
    } else if (document.exitFullscreen) {
        document.exitFullscreen();
    } else if (document.msExitFullscreen) {
        document.msExitFullscreen();
    } else if (document.mozCancelFullScreen) {
        document.mozCancelFullScreen();
    } else if (document.webkitExitFullscreen) {
        document.webkitExitFullscreen();
    }
}

const NavLeft = () => (
    <ul className="nav-left">
        <li>
            <a href="#!" onClick={ toggleFullScreen }>
                <i className="ti-fullscreen" />
            </a>
        </li>
    </ul>
);

export default NavLeft;
