<script>
  import format from 'date-fns/format';
  export let message;
</script>

<div class="message-container">
  <p class="text">{message.text}</p>
  <span class="timestamp">{format(message.timestamp, 'HH:mm aaa')}</span>
  <span class="user">~{message.userName || ''}</span>
</div>

<style>
  .message-container {
    border: 1px solid lightgrey;
    padding: 5px 10px;
    display: flex;
    align-items: center;
  }

  .text {
    font-size: 1.25rem;
    margin-right: 10px;
  }

  .timestamp {
    color: gray;
    font-size: 0.75rem;
    margin-right: 4px;
  }

  .user {
    color: gray;
    font-size: 0.75rem;
  }
</style>