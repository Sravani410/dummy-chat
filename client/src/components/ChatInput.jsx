
import styled from "styled-components"

import Picker from "emoji-picker-react";
// npm install emoji-picker-react;
import { IoMdSend } from "react-icons/io";
import { BsEmojiSmileFill } from "react-icons/bs";
import { useState } from "react";

export const ChatInput = ({ handleSendMsgFn }) => {

    const [showEmojiPicker, setShowEmojiPicker] = useState(false);

    const [message, setMessage] = useState("");

    const handleEmojiPickerHideShow = () => {

        setShowEmojiPicker(!showEmojiPicker);

    }

    const handleEmojiClick = (event, emoji) => {

        let Message = message;
        Message += emoji.emoji;
        setMessage(Message);

    }

    const handleSendChat = (event) => {
        event.preventDefault();
        if(message.length > 0) {

            handleSendMsgFn(message)
            setMessage("");

        }
    }
    return (

       <>
        <Container>
            <div className="button-container">
                <div className="emoji">
                    <BsEmojiSmileFill onClick={handleEmojiPickerHideShow} />
                    {showEmojiPicker && <Picker onEmojiClick={handleEmojiClick} />}
                </div>
            </div>

            <form onSubmit={handleSendChat} className="input-container-form">

                <input value={message} onChange = {(event) =>

                    setMessage(event.target.value)

                } type="text" name="" id="" placeholder="type your message here" />
                <button className="submit">
                    <IoMdSend />
                </button>

            </form>
        </Container>
       </>
    )

}

const Container = styled.div`
    display: grid;
    grid-template-columns: 5% 95%;
    align-items: center;
    background-color: #080420;
    padding: 0 2rem;
    padding-bottom: 0.3rem;

    @media screen and (min-width : 720px) and (max-width : 1080px) {
        padding: 0 1rem;
        gap: 1rem;
    }
    @media screen and (min-width : 160px) and (max-width : 720px) {
        /* border: 1px solid yellow ; */
        

        padding: 0 .5rem;
        gap: .5rem;
    }

    .button-container {
        display: flex;
        align-items: center;
        color: white;
        gap: 1rem;
        
        .emoji {
            position: relative;
            svg {
                font-size: 1.5rem;
                color: #ffff00c8;
                cursor: pointer;
            }
            .emoji-picker-react {
                position: absolute;
                top: -350px;
                background-color: #080420;

                box-shadow: 0 5px 10px #9a86f3;
                border-color: #9186f3;
                .emoji-scroll-wrapper::-webkit-scrollbar {
                    background-color: #080420;
                    width: 5px;
                    &-thumb {
                        background-color: #9a86f3;
                    }
                }
                .emoji-categories {
                    button {
                        filter : contrast(0);
                    }
                }
                .emoji-search {
                    background-color: transparent;
                    
                    border-color: #9186f3;
                }
                .emoji-group:before {
                    background-color: #080420;
                }
            }
        }
    }
    .input-container-form {
        width: 100%;
        border-radius: 2rem;
        display: flex;
        
        align-items: center;
        gap: 2rem;
        background-color: transparent;
        input {
            width: 98%;
            /* height: 60%; */
            background-color: transparent;
            color: white;
            border: none;

            padding-left: 1rem;
            font-size: 1.2rem;
            &::selection {
                background-color: #9186f3;
            }
            &:focus {
                outline: none;
            }
        }
        
        button {
            padding: 0.3rem 2rem;
            border-radius: 2rem;
            display: flex;
            justify-content: center;
            align-items: center;
            background-color: #9a86f3;
            border: none; 
            


            svg {
                font-size: 2rem;
                
                color: white;
            }
            @media screen and (min-width : 720px) and (max-width : 1080px) {
                padding: 0.3rem 1rem;
                svg {
                    font-size: 1rem;
                }
            }
            @media screen and (min-width : 160px) and (max-width : 720px) {
                /* border: 1px solid yellow ; */
                padding: 0.1rem .5rem;
                svg {
                    font-size: 1rem;
                }
            }
        }
    }
`