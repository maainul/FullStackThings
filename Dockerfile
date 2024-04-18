FROM mongo:4.4-bionic

ENV MONGO_INITDB_DATABASE=ms_gate_db

RUN mkdir -p /var/lib/mongodbsql/data
