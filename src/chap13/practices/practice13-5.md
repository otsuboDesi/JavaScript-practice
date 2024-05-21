<script>
// 1. fulfilled
// 2. rejected
// 3. settled
// 4. fulfilled
// 5. 全てのインスタンス
// 6. 全て
// 7. settled

Promise.all は、すべての Promise が 1.fulfilled のステータスに遷移すると then メソッドに移行します。
1つでもステータスが 2.rejected に遷移すると catch メソッドが呼び出されます。
Promise.race は、いずれかの Promise が 3.settled のステータスになったタイミングで then メソッドまたは catch メソッドを実行します。
Promise.any は、いずれかの Promise が 4.fulfilled になったタイミングで then メソッドに処理を移行します。また、 5. 全てのインスタンス の Promise の状態が rejected になったときには catch メソッドを実行します。
Promise.allSettled は 6. 全て の Promise インスタンスの状態が 7. settled になったときに then メソッドに処理を移行します。また、then メソッドのコールバック関数には、それぞれの Promise のステータスの状態 (status) を含むオブジェクトが配列に格納されて渡されます。
</script>
