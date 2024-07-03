import React, { useState } from 'react';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import SendIcon from '@mui/icons-material/Send';

import axios from 'axios';

const ChatPage = () => {
    const [inputMessage, setInputMessage] = useState('');
    const [chatHistory, setChatHistory] = useState([]);

    const sendMessage = async () => {
        try {
            const response = await axios.post('http://localhost:3003/api/v1/users/chat', {
                question: inputMessage,
            });
            const newMessage = { role: 'user', content: inputMessage };
            const newAnswer = { role: 'assistant', content: response.data };
            setChatHistory([
                ...chatHistory,
                newMessage,
                newAnswer
            ]);
            setChatHistory([...chatHistory, newMessage, newAnswer]);
            setInputMessage('');
        } catch (error) {
            console.error('Error sending message:', error);
        }
    };

    const handleInputChange = (e) => {
        setInputMessage(e.target.value);
    };

    return (
        <Container maxWidth="md" sx={{ mt: 4, mb: 4 }}>
            <h2>Ask anything</h2>
            <Paper sx={{ p: 2, minHeight: '400px', display: 'flex', flexDirection: 'column', alignItems: 'stretch', justifyContent: 'space-between' }}>
                <Box sx={{ flexGrow: 1, mb: 2, overflowY: 'scroll' }}>
                    {chatHistory.map((message, index) => (
                        <Box key={index} sx={{ mb: 2 }}>
                            {message.role === 'user' ? (
                                <Typography variant="body1" sx={{ backgroundColor: '#e3f2fd', p: 2, borderRadius: '10px' }}>
                                    {message.content}
                                </Typography>
                            ) : (
                                <Typography variant="body1" sx={{ backgroundColor: '#f5f5f5', p: 2, borderRadius: '10px' }}>
                                    {message.content}
                                </Typography>
                            )}
                        </Box>
                    ))}
                </Box>
                <Box sx={{ display: 'flex', alignItems: 'center' }}>
                    <TextField
                        fullWidth
                        value={inputMessage}
                        onChange={handleInputChange}
                        label="Type your message"
                        variant="outlined"
                        sx={{ mr: 2 }}
                    />
                    <Button
                        variant="contained"
                        color="primary"
                        endIcon={<SendIcon />}
                        onClick={sendMessage}
                    >
                        Send
                    </Button>
                </Box>
            </Paper>
        </Container>
    );
};

export default ChatPage;
