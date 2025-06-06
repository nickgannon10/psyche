#!/bin/bash

set -o errexit
set -o pipefail

num_clients=$1

# Get the number of available GPUs
num_gpus=$(nvidia-smi --query-gpu=index --format=csv,noheader | wc -l)

for i in $(seq 1 "$num_clients"); do
    gpu_id=$((i - 1))

    if [ "$gpu_id" -ge "$num_gpus" ]; then
        echo "Error: GPU index $gpu_id does not exist. Exiting." >&2
        exit 1
    fi

    if docker ps -a --format '{{.Names}}' | grep -q "^psyche-test-client-${i}$"; then
        docker rm -f psyche-test-client-"${i}"
    fi

    docker run -d \
        --name psyche-test-client-"${i}" \
        --gpus "device=$gpu_id" \
        --env NVIDIA_DRIVER_CAPABILITIES=all \
        --env-file ./config/client/.env \
        --add-host=host.docker.internal:host-gateway \
        psyche-test-client

    echo "Started psyche-test-client-${i} on GPU $gpu_id"
done
