#!/bin/bash

# if node GID and UID is not ${DEFAULT_UID} and ${DEFAULT_GID}
# set proper GID and UID
usermod --shell /bin/bash node

CHECK_FOR_DEFAULT_UID=`id -u node`
if [ "${CHECK_FOR_DEFAULT_UID}" != "${DEFAULT_UID}" ]; then
    usermod  --uid ${DEFAULT_UID} node
fi
CHECK_FOR_DEFAULT_GID=`id -u node`
if [ "${CHECK_FOR_DEFAULT_GID}" != "${DEFAULT_GID}" ]; then
    groupmod --gid ${DEFAULT_GID} node
fi

if [ "$1" = 'npm' ]; then
    # clear and update node_modules on each npm command
    sudo -EHu node npm prune
    sudo -EHu node npm install
fi

exec sudo -EHu node "$@"
