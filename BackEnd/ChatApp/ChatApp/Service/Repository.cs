using ChatApp.Model;

namespace ChatApp.Service
{
    public class Repository : IRepository
    {
        private List<ChatMessage> _chatMessages ;
        public Repository()
        {
            _chatMessages = new List<ChatMessage>();
        }
        public void Add(ChatMessage message)
        {
            if (MessageIsValid(message))
            {
                _chatMessages.Add(message);
            }
        }

        public void DeleteMessage(int userNameId)
        {
            //TODO

            //_chatMessages.Remove(message);
            //var message = _chatMessages.FirstOrDefault(o=>o.Id == userNameId);
            //if (message!=null)
            //{
            //    _chatMessages.Remove(message);
            //}
        }

        public List<ChatMessage> GetMessages()
        {
            return _chatMessages;
        }
        
        private bool MessageIsValid(ChatMessage message)
        {
            //TODO
            return message != null;
        }

    }
}
