/*
 * Copyright 2020 Amazon.com, Inc. or its affiliates. All Rights Reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License").
 * You may not use this file except in compliance with the License.
 * A copy of the License is located at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * or in the "license" file accompanying this file. This file is distributed
 * on an "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either
 * express or implied. See the License for the specific language governing
 * permissions and limitations under the License.
 */

import React, { useState } from 'react';
import {
  EuiButton,
  EuiContextMenuItem,
  EuiContextMenuPanel,
  EuiFlexGroup,
  EuiFlexItem,
  EuiPopover,
} from '@elastic/eui';
import { DetectorListItem } from '../../../../models/interfaces';

interface ListActionsProps {
  onStartDetectors(): void;
  onStopDetectors(): void;
  //onDeleteDetectors(): void;
  detectors: DetectorListItem[];
  isActionsDisabled: boolean;
}

export const ListActions = (props: ListActionsProps) => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <EuiFlexGroup justifyContent="spaceBetween" alignItems="center">
      <EuiFlexItem grow={false} style={{ marginRight: '16px' }}>
        <EuiPopover
          id="actionsPopover"
          button={
            <EuiButton
              disabled={props.isActionsDisabled}
              iconType="arrowDown"
              iconSide="right"
              data-test-subj="actionsButton"
              onClick={() => setIsOpen(!isOpen)}
            >
              Actions
            </EuiButton>
          }
          panelPaddingSize="none"
          anchorPosition="downLeft"
          isOpen={isOpen}
          closePopover={() => setIsOpen(false)}
        >
          <EuiContextMenuPanel>
            <EuiContextMenuItem
              key="startDetectors"
              data-test-subj="startDetectors"
              onClick={props.onStartDetectors}
            >
              Start
            </EuiContextMenuItem>

            <EuiContextMenuItem
              key="stopDetectors"
              data-test-subj="stopDetectors"
              onClick={props.onStopDetectors}
            >
              Stop
            </EuiContextMenuItem>

            {
              // TODO: will add back in later PR
            }
            {/* <EuiContextMenuItem
              key="deleteDetectors"
              data-test-subj="deleteDetectors"
              onClick={props.onDeleteDetectors}
            >
              Delete
            </EuiContextMenuItem> */}
          </EuiContextMenuPanel>
        </EuiPopover>
      </EuiFlexItem>
    </EuiFlexGroup>
  );
};
