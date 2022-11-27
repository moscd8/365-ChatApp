namespace ChatApp.Model
{
    public interface IRepository
    {
        void Add(ChatMessage message);
        List<ChatMessage> GetMessages();

        void DeleteMessage(int id);
    }
}
