﻿namespace ChatApp.Model
{
    public class ChatMessage
    {
       public int? Id { get; set; }
        public string User { get; set; }

        public string Message { get; set; }
        public string Group { get; set; }

    }
}
