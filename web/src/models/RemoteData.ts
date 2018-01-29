export type RemoteData<E, T>
  = NotAsked
  | Loading
  | Failure<E>
  | Success<T>

interface NotAsked {
  kind: "NotAsked";
}

interface Loading {
  kind: "Loading";
}

interface Failure<E> {
  kind: "Failure";
  error: E
}

interface Success<T> {
  kind: "Success";
  data: T
}