FROM mcr.microsoft.com/devcontainers/typescript-node:20

# Install latest pnpm
# RUN npm install -g pnpm

COPY example-welcome-message.txt /usr/local/etc/vscode-dev-containers/first-run-notice.txt

# Hack to force container to be cleaned up after VS Code disconnects.
# See:
# https://github.com/microsoft/vscode-remote-release/issues/3512#issuecomment-2131354971
# https://github.com/microsoft/vscode-remote-release/issues/6056#issuecomment-2453901502
CMD while sleep 120 && ps aux | egrep 'vscode.*[b]ootstrap-fork.*extensionHost.*' > /dev/null; do :; done